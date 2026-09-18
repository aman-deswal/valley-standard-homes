# Valley Standard Homes static site

This folder is a deployable one-page static website.

## Files

- `index.html` - page content
- `styles.css` - styling
- `assets/valley-standard-icon.svg` - icon/favicon
- `assets/valley-standard-logo.svg` - full logo
- `assets/aman-deswal-headshot.jpg` - founder headshot
- `CNAME` - custom domain for GitHub Pages
- `.nojekyll` - tells GitHub Pages to publish the static files as-is

## Deploy on GitHub Pages

1. Create a new GitHub repository, for example `valley-standard-homes`.
2. Upload the contents of this folder to the repository root:

```text
index.html
styles.css
assets/
CNAME
.nojekyll
README.md
```

3. Commit the files to the `main` branch.
4. In GitHub, go to **Settings > Pages**.
5. Under **Build and deployment**, set:
   - **Source:** Deploy from a branch
   - **Branch:** `main`
   - **Folder:** `/root`
6. Save.
7. Under **Custom domain**, enter:

```text
valleystandardhomes.com
```

8. Save and wait for GitHub to check DNS.
9. In GoDaddy DNS, point the domain to GitHub Pages:

```text
Type: A     Name: @     Value: 185.199.108.153
Type: A     Name: @     Value: 185.199.109.153
Type: A     Name: @     Value: 185.199.110.153
Type: A     Name: @     Value: 185.199.111.153
Type: CNAME Name: www   Value: YOUR-GITHUB-USERNAME.github.io
```

10. Once GitHub Pages shows the domain as active, enable **Enforce HTTPS**.

## Notes

- The site is intentionally marked "Coming Fall 2026" for the pre-launch period.
- The contact form is ready for a Google Apps Script / Google Sheets endpoint. Until `data-sheet-endpoint` is filled in, it falls back to opening an email draft to `aman@valleystandardhomes.com`.
- No third-party scripts, libraries, trackers, or fonts are used.

## Send form submissions to Google Sheets

1. Create a Google Sheet named something like `Valley Standard Interest List`.
2. In the Sheet, go to **Extensions > Apps Script**.
3. Paste this script:

```js
const SHEET_NAME = "Leads";

function doPost(e) {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = spreadsheet.getSheetByName(SHEET_NAME) || spreadsheet.insertSheet(SHEET_NAME);
  const headers = [
    "submitted_at",
    "name",
    "email",
    "property_location",
    "current_status",
    "owner_priorities",
    "source",
  ];

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(headers);
  }

  const data = e.parameter;
  sheet.appendRow(headers.map((header) => data[header] || ""));

  return ContentService
    .createTextOutput(JSON.stringify({ result: "success" }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

4. Click **Deploy > New deployment**.
5. Choose **Web app**.
6. Set **Execute as** to **Me**.
7. Set **Who has access** to **Anyone**.
8. Copy the Web app URL.
9. In `index.html`, paste the URL into the form’s `data-sheet-endpoint` value:

```html
data-sheet-endpoint="https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec"
```

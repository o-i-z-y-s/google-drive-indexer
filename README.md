# google-drive-indexer
Prints an index of everything within a Google Drive folder structure to a Google Sheet with links to each file.

Steps:
1. Make a new spreadsheet in Google Drive.
2. Open the *Extensions* dropdown menu and select *Apps Script*.
3. Paste in all code from the included file.
4. **Make sure to replace the folder name in line 4 with your target folder's name.**
5. Hit the *Save* button (floppy disk icon) and press *Run*.

**Note**: Unless you remove or comment out the ``sheet.clear();`` on line 6, the sheet will be wiped on each run.
**Also**, line 20 in main() sets the output location. The values in ``sheet.getRange()`` are, by default, *row 1*, *column 1*, *number of rows*, *number of columns*.

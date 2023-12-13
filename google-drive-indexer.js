var rows = [];

function getMyFilesFromDrive() {
 var myFolder = DriveApp.getFoldersByName('D&D');
 var sheet = SpreadsheetApp.getActiveSheet();
 sheet.clear();
 rows.push(["ID", "Name", "Url", "Parent"]);
 while(myFolder.hasNext()) {
  var folder = myFolder.next();
  var files = folder.getFiles();
  while(files.hasNext()) {
    var file = files.next();
    if(file != null) {
      rows.push([file.getId(), file.getName(), file.getUrl(), file.getParents().next()]);
    }
  }
  var subfolders = folder.getFolders();
  subfolderTime(subfolders);
 }
 var range = sheet.getRange(1,1,rows.length,4);
 range.setValues(rows);
}

function subfolderTime(subfolders) {
  while(subfolders.hasNext()) {
    let nextSubfolder = subfolders.next();
    files = nextSubfolder.getFiles();
    while(files.hasNext()) {
      file = files.next();
      if(file != null) {
        rows.push([file.getId(), file.getName(), file.getUrl(), file.getParents().next()]);
      }
    }
    var check = nextSubfolder.getFolders();
    if (check != null) {
      subfolderTime(check);
    }
  }
}
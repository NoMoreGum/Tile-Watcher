![alt tag](http://s22.postimg.org/b2w19eudd/Untitled_1.png)
<br />
Download and install Node.js from the link below

https://nodejs.org/

----------------------------

Navigate to where you extracted tile watcher and open up Terminal/Command Prompt/Powershell and create one of the commands below

BASIC COMMAND

parameters: <br /> <br />
-x: the path and filter to the file/files you want to rename  <br />
-y: the output file extension  <br />
-z: the output folder reletive to the file location


gulp -x "path and filter" -y "output extension" -z "output folder"

example for Tiled Map Editor: <br />
gulp -x &nbsp;"D:\UnityProjects\LD\LDGame\Assets\Resources\Levels\ *.tmx"&nbsp; -y &nbsp;".xml" -z&nbsp; "../XML Folder"

example for Ogmo Editor: <br />
gulp -x &nbsp;"D:\UnityProjects\LD\LDGame\Assets\Resources\Levels\ *.oel"&nbsp; -y &nbsp;".xml" -z&nbsp; "../XML Folder"

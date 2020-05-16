## Key Shortcuts
Nimble uses key shortcuts for its power user. You can find the shortscuts in the menu item behind the menu item's title. 

Moreover, a list of key shortcuts that work nicely in the editor window can be found here [Mac Official Documentation](https://support.apple.com/en-us/HT201236). Look for Document Shortcuts further down the document

## Nimble Settings
You can configure Nimble by making changes to the setting files. From the main menu, use Nimble > Preference > Settings to open the settings file. Below the available settings and allowed values. Change the values and save the file. The changes are effective immediately.

| Area | Variable | Effect | Values|
| ------------- |-------------|-----|-----|
| workbench | workbench.tabCloseButtonPosition | Set position of tab close button to left or right | left, right |
| workbench | workbench.showFileIconsInTabs | Display icons within tabs | true, false |


## Running an SPM project
1. Create a SPM project of type executable
	* Create a directory that holds the project **myproject**
	* CD into the project folder **cd myproject**
	* Create SPM project of type executable **swift package init --type executable**

2. Start Nimble and add the folder into Nimble
	 * Use **Project|Add Folder to Project**
	 * add your **myproject** folder to the project

3. Open any file of the SPM project
	* Open **main.swift** and change the print statement

4. Build the project
	* Press **Command + B**

5. Run the project
	* Press **Command + R**

## Running a Vapor project

1. Install Vapor. Follow the instructions here [Install Vapor](https://docs.vapor.codes/3.0/install/macos/#install-vapor)

2. Create a Vapor project 
	 * from the command line, execute **vapor new HelloNimble**
	 * a new directory called **HelloNimble** is created 

3. Add HelloNimble to your Workspace
	 * Use **Project|Add Folder to Project**
	 * add your **HelloNimble** folder to the project

4. Modify the routes.swift file
	* Change **World** to **Nimble**

5. Build the project
	* Press **Command + B**

6. Run the project
	* Press **Command + R**

7. Open the Browser
	* at [https://localhost:8080](https://localhost:8080)

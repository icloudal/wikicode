<video autoplay muted loop playsinline id="bg-video">
  <source src="../assets/images/testvideo.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>

# Basics CLI's

## **Administracion Local**

### Net user

Puedes usar los comandos `net user` y `net localgroup` para gestionar cuentas y grupos locales.


=== "Listar usuarios"
    ``` yaml

    net user                            # List users on the machine
    net user username password /add     # Create a user
    net user username /active:yes       # Activate a user
    net user username new_password      # Change user password
    net user username /active:yes       # Activate the user
    net user username /active:no        # Deactivate the user
    net user username /delete           # Delete the user
    ```
=== "Grupos Locales"

    ``` yaml
   
    net localgroup                                   # View groups on the machine
    net localgroup group_name /add                   # Create a local group
    net localgroup group_name username /add          # Add user to a group
    net localgroup group_name                        # View users in a group
    net localgroup group_name username /delete       # Remove user from a group
    net localgroup group_name /delete                # Delete a group

    ```

???- info "¿Where are the user's personal folders located?" In PowerShell, you can check the path using:"
        
    ```powershell
    %HOMEPATH%
    ```
    You can also use:
    ```powershell
    echo $env:HOMEPATH
    ```
    Or to get the full path:
    ```powershell
    echo $env:USERPROFILE
    ```

## **Basic PowerShell Commands**

### Navigation and File/Folder Manipulation

```powershell


cd               # Navigate between directories
dir              # List the contents of a folder
Tree             # Show the folder structure in a tree format
Cls              # Clear the console window
Move             # Move files
Rename           # Rename files or directories
MD               # Create a folder
Type             # Create a file



```

### Information and Help Commands

```powershell

Get-Command      # List all available cmdlets and commands in PowerShell
Get-Host         # Show the version of PowerShell the system is using
Get-History      # Show the command history of the current session
Get-Random       # Show a random number between 0 and 2,147,483,646
Get-Service      # Show the services installed on the system
Get-Help         # Provide help on cmdlets and their usage
Get-Date         # Show the current date and time


```

### File and Directory Manipulation Commands

```powershell


Copy-Item        # Copy files or directories
Move-Item        # Move files or directories
Rename-Item      # Rename files or directories
Remove-Item      # Remove specific items
Get-Content      # View and display the contents of a file
Set-Content      # Store text in a file
Get-Item         # Get information about a specific item
Set-Item         # Modify the content of a file or directory


```

### Commands for Executing Scripts and Processes

```powershell

Invoke-Command   # Execute a specific script or command
Invoke-WebRequest# Perform a login, scraping, or download data from a website
Set-ExecutionPolicy # Change security policies for scripts or programs


```

### Variables Commands

```powershell

Get-Variable     # View the content of a variable
Set-Variable     # Modify or create the content of a variable


```

### Services and Processes Commands

```powershell

Get-Process      # Show information about running processes
Start-Process    # Start processes
Stop-Process     # Stop processes

```

??? info "Where are hostnames resolved if there's no DNS?"
    If there is no active DNS, name resolution is handled here:

    ```txt
    C:\Windows\System32\drivers\etc\hosts
    ```


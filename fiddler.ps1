[CmdletBinding()]
param (
    [Parameter()]
    [string]
    $fiddlerURL = "http://localhost:8888"
	
)
Write-Information "Configuring Fiddler URL to capture Cypress requests - ${$fiddlerURL}"
$env:HTTP_PROXY = $fiddlerURL
$env:NO_PROXY = $byPassFiddler
Write-Warning "If you need to disable, start from a new window"
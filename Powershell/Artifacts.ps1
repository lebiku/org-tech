. .\Variables.ps1

function Upload-JavaScript {
	param(
		[Parameter(Mandatory=$True)]
		[string] $fileName
	)

    $remoteAssetsPath = "Style Library\kapo-tech-org"
    $scriptBuildPath = "..\dist\" + $fileName;
    Add-PnPFile -Path $scriptBuildPath -Folder $remoteAssetsPath -Checkout -Publish
}

Upload-JavaScript "kapoOrg.js"
Upload-JavaScript "kapoOrg.js.map"
Upload-JavaScript "kapoOrg.css"
Upload-JavaScript "kapoOrg.css.map"
Upload-JavaScript "vendor.js"
Upload-JavaScript "vendor.js.map"
Upload-JavaScript "vendor.css"
Upload-JavaScript "vendor.css.map"

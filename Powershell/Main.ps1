### Setup and Connect
. .\Variables.ps1

# Auto Credentials
$Credential = Get-Credential;

Connect-PnPOnline -Url $destinationUrl -Credentials $Credential

# Provision taxonomy items
Apply-PnPProvisioningTemplate -Path "Taxonomy.xml"

# Provision Javascript and CSS files
.\Artifacts.ps1

if ($provisionGermanPage -eq $true) {
    $relativeHomePageUrl = '/de-DE/Seiten/Organisation.aspx';
    $relativePortalUrl = $siteRelativeUrl + $relativeHomePageUrl 

    Connect-PnPOnline -url ($destinationUrl + "/de-DE") -credentials $Credential
    Add-PnPPublishingPage -PageName 'Organisation' -Title 'Organisation' -PageTemplateName 'KapoBlankWebPartPage' -ErrorAction SilentlyContinue
    Set-PnPFileCheckedOut -Url $relativePortalUrl
    Add-PnPWebPartToWebPartPage -ServerRelativePageUrl $relativePortalUrl -Path '.\AppLoaderDist.webpart' -ZoneId "Header" -ZoneIndex 1
    Set-PnPFileCheckedIn -Url $relativePortalUrl
}

if ($provisionFrenchPage -eq $true) {

    $relativeHomePageUrl = '/fr-FR/Pages/Organisation.aspx';
    $relativePortalUrl = $siteRelativeUrl + $relativeHomePageUrl 

    Connect-PnPOnline -url ($destinationUrl + "/fr-FR") -credentials $Credential
    Add-PnPPublishingPage -PageName 'Organisation' -Title 'Organisation' -PageTemplateName 'KapoBlankWebPartPage' -ErrorAction SilentlyContinue
    Set-PnPFileCheckedOut -Url $relativePortalUrl
    Add-PnPWebPartToWebPartPage -ServerRelativePageUrl $relativePortalUrl -Path '.\AppLoaderDist.webpart' -ZoneId "Header" -ZoneIndex 1
    Set-PnPFileCheckedIn -Url $relativePortalUrl
}
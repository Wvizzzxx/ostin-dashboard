# Download assets from impulse.guru
$baseUrl = "https://impulse.guru"
$session = New-Object Microsoft.PowerShell.Commands.WebRequestSession
$cookie = New-Object System.Net.Cookie('beget', 'begetok', '/', '.impulse.guru')
$session.Cookies.Add($cookie)

$assets = @(
    # Logo
    @{ Path = "/tilda-2/images/tild3731-3165-4538-a132-653561623963__frame_2091750252.svg"; Name = "logo.svg" },
    @{ Path = "/tilda-2/images/tild6637-3233-4361-b861-613762383338__frame_2091750252.svg"; Name = "logo-white.svg" },
    @{ Path = "/tilda-2/images/tild6366-3931-4266-a134-363362383134__favicon.ico"; Name = "favicon.ico" },
    
    # Icons - Social
    @{ Path = "/tilda-2/images/tild6638-6462-4231-b161-393037336131__component_9.svg"; Name = "icon-whatsapp.svg" },
    @{ Path = "/tilda-2/images/tild3637-3831-4234-b235-646234616462__component_9.svg"; Name = "icon-whatsapp-dark.svg" },
    @{ Path = "/tilda-2/images/tild6631-3835-4230-b861-383262396639__component_10.svg"; Name = "icon-telegram.svg" },
    @{ Path = "/tilda-2/images/tild3734-6565-4661-a662-346235663933__component_10.svg"; Name = "icon-telegram-dark.svg" },
    @{ Path = "/tilda-2/images/tild3436-3737-4034-b030-373863363566__wa_before.svg"; Name = "icon-wa-before.svg" },
    @{ Path = "/tilda-2/images/tild6636-6562-4331-b363-303664383630__tg_before.svg"; Name = "icon-tg-before.svg" },
    
    # UI Icons
    @{ Path = "/tilda-2/images/tild3563-3863-4632-b833-353931636235__geo_header.svg"; Name = "icon-geo.svg" },
    @{ Path = "/tilda-2/images/tild6462-6666-4534-b734-333633303065__down_arrow_before.svg"; Name = "icon-arrow-down.svg" },
    @{ Path = "/tilda-2/images/tild3065-3335-4237-b732-663333616434__close_menu.svg"; Name = "icon-close.svg" },
    @{ Path = "/tilda-2/images/tild6163-3366-4638-b061-633461656333__aim.svg"; Name = "icon-aim.svg" },
    @{ Path = "/tilda-2/images/tild3536-3531-4162-b736-616562343633__message.svg"; Name = "icon-message.svg" },
    @{ Path = "/tilda-2/images/tild6363-3564-4034-a537-633164316236__message_after.svg"; Name = "icon-message-hover.svg" },
    @{ Path = "/tilda-2/images/tild3532-3935-4163-b530-616664353538__attach3.svg"; Name = "icon-attach.svg" },
    
    # Decorative
    @{ Path = "/tilda-2/images/tild3438-3339-4665-a232-633030633932__square.svg"; Name = "shape-square.svg" },
    @{ Path = "/tilda-2/images/tild3734-6565-4661-a662-346235663933__line110.svg"; Name = "line-110.svg" },
    @{ Path = "/tilda-2/images/tild3064-6335-4663-b134-396231653435__line110.svg"; Name = "line-110-light.svg" },
    @{ Path = "/tilda-2/images/tild3466-6434-4236-b038-343930326162__line_30.svg"; Name = "line-30.svg" },
    @{ Path = "/tilda-2/images/tild3734-3934-4234-a165-613237653334__line_40.svg"; Name = "line-40.svg" },
    @{ Path = "/tilda-2/images/tild3163-3164-4933-a334-306331633664__baner2.svg"; Name = "banner.svg" },
    
    # Images
    @{ Path = "/tilda-2/images/tild6263-6333-4230-a266-636135636532__creative1.svg"; Name = "creative1.svg" },
    @{ Path = "/tilda-2/images/tild3430-3362-4764-b532-336231643533__element.png"; Name = "element.png" }
)

foreach ($asset in $assets) {
    $outPath = "impulse-ui-kit/assets/$($asset.Name)"
    try {
        Invoke-WebRequest -Uri "$baseUrl$($asset.Path)" -OutFile $outPath -WebSession $session -UseBasicParsing -ErrorAction Stop
        Write-Host "Downloaded: $($asset.Name)"
    } catch {
        Write-Host "Failed: $($asset.Name) - $($_.Exception.Message)"
    }
}
Write-Host "Done downloading assets"
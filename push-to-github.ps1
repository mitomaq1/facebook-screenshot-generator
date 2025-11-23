# GitHub'a Yükleme Script'i
# Kullanım: .\push-to-github.ps1 -GitHubUsername "your-username" -RepoName "facebook-screenshot-generator"

param(
    [Parameter(Mandatory=$true)]
    [string]$GitHubUsername,
    
    [Parameter(Mandatory=$false)]
    [string]$RepoName = "facebook-screenshot-generator"
)

Write-Host "🚀 GitHub'a yükleme başlatılıyor..." -ForegroundColor Green

# Mevcut durumu kontrol et
Write-Host "`n📋 Git durumu kontrol ediliyor..." -ForegroundColor Yellow
git status

# Remote repository'yi ayarla
$remoteUrl = "https://github.com/$GitHubUsername/$RepoName.git"
Write-Host "`n🔗 Remote repository ayarlanıyor: $remoteUrl" -ForegroundColor Yellow

# Mevcut remote'u kontrol et
$existingRemote = git remote get-url origin 2>$null
if ($existingRemote) {
    Write-Host "⚠️  Mevcut remote bulundu: $existingRemote" -ForegroundColor Yellow
    $update = Read-Host "Güncellemek ister misiniz? (y/n)"
    if ($update -eq "y" -or $update -eq "Y") {
        git remote set-url origin $remoteUrl
    }
} else {
    git remote add origin $remoteUrl
}

# Branch'i main olarak ayarla
Write-Host "`n🌿 Branch ayarlanıyor..." -ForegroundColor Yellow
git branch -M main

# GitHub'a push et
Write-Host "`n⬆️  GitHub'a yükleniyor..." -ForegroundColor Yellow
Write-Host "💡 GitHub kullanıcı adı ve şifreniz (veya token) istenebilir" -ForegroundColor Cyan
Write-Host "💡 Eğer 2FA aktifse, Personal Access Token kullanmanız gerekebilir" -ForegroundColor Cyan

try {
    git push -u origin main
    Write-Host "`n✅ Başarıyla GitHub'a yüklendi!" -ForegroundColor Green
    Write-Host "🌐 Repository URL: https://github.com/$GitHubUsername/$RepoName" -ForegroundColor Cyan
    Write-Host "`n💡 GitHub Pages için Settings > Pages bölümünden yayınlayabilirsiniz." -ForegroundColor Yellow
} catch {
    Write-Host "`n❌ Hata oluştu: $_" -ForegroundColor Red
    Write-Host "`n🔧 Manuel olarak şu komutları çalıştırabilirsiniz:" -ForegroundColor Yellow
    Write-Host "   git remote add origin $remoteUrl" -ForegroundColor White
    Write-Host "   git branch -M main" -ForegroundColor White
    Write-Host "   git push -u origin main" -ForegroundColor White
    Write-Host "`n💡 Veya GitHub'da yeni bir repository oluşturup yukarıdaki komutları kullanabilirsiniz." -ForegroundColor Cyan
}


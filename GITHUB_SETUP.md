# GitHub'a Yükleme Talimatları

## Hızlı Başlangıç

### Yöntem 1: PowerShell Script Kullanarak (Önerilen)

1. GitHub'da yeni bir repository oluşturun:
   - https://github.com/new adresine gidin
   - Repository adı: `facebook-screenshot-generator` (veya istediğiniz isim)
   - Public veya Private seçin
   - **ÖNEMLİ:** README, .gitignore veya license eklemeyin (zaten var)

2. PowerShell script'ini çalıştırın:
```powershell
cd facebook-screenshot-generator
.\push-to-github.ps1 -GitHubUsername "your-github-username"
```

### Yöntem 2: Manuel Komutlar

1. GitHub'da yeni bir repository oluşturun (yukarıdaki gibi)

2. Aşağıdaki komutları sırayla çalıştırın:
```powershell
cd facebook-screenshot-generator

# Remote ekle (your-username yerine GitHub kullanıcı adınızı yazın)
git remote add origin https://github.com/your-username/facebook-screenshot-generator.git

# Branch'i main olarak ayarla
git branch -M main

# GitHub'a push et
git push -u origin main
```

## GitHub Pages ile Yayınlama

Projeyi GitHub Pages'te yayınlamak için:

1. GitHub repository sayfanıza gidin
2. **Settings** sekmesine tıklayın
3. Sol menüden **Pages** seçin
4. **Source** bölümünden **main** branch'ini seçin
5. **Build and deployment** bölümünde:
   - Source: Deploy from a branch
   - Branch: main
   - Folder: / (root)
6. **Save** butonuna tıklayın
7. Birkaç dakika sonra projeniz şu adreste yayınlanacak:
   `https://your-username.github.io/facebook-screenshot-generator/`

**Not:** Vite projeleri için build klasörünü (dist) deploy etmeniz gerekebilir. Bu durumda:
- Build klasörünü deploy edin: `dist` klasörünü seçin
- Veya GitHub Actions ile otomatik build yapılandırması ekleyin

## Sorun Giderme

### Authentication Hatası
Eğer kimlik doğrulama hatası alırsanız:
- GitHub Personal Access Token kullanın
- Veya GitHub Desktop uygulamasını kullanın

### Remote Already Exists Hatası
```powershell
git remote remove origin
git remote add origin https://github.com/your-username/facebook-screenshot-generator.git
```

### Branch Hatası
```powershell
git branch -M main
git push -u origin main
```


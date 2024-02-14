<!DOCTYPE html>
<html>
<head>
	<title> Git </title>

	~ git config --global/local user.main "renawuriwp@gmail.com"
	~ buat foldernya jadi git dengan perintah
	  git init
	~ untuk menambahkan file ke komit dengan perintah
	  git add . 
	~ perintah untuk melakukan remote thdp repository
	  git remote add origin http... (querynya ada ketika kita sudah buat repo baru di github)
	~ perintah untuk melakukankomit
	  git commit -m "isi pesan nya bebas, ex perubahan 1"
	~ untuk upload file ke repo
	  git push -u origin master              #main (master)

	~ nah klo mau nambahin lgi file dengan tahap
	  git add . 
	  git commit -m "update data kedua"
      git push  

    ~ jika ingin hapus data, tinggal hapus aja file di folder laptop. 
      lalu tambahin lgi  kerepo dgn perintah
      git add . 
      git commit -m "Perubahan ketiga"
      git push
      lalu di refresh filenya

    ~ jika ingin melakukan perubahan di reponya, tinggal klik filenya lalu hapus dan ksh keterangan commitnya.
    ~ agar file di laptop jga terupdate jalankan perintah 
      git pull
      lalu refresh foldernya


</head>
<body>

</body>
</html>
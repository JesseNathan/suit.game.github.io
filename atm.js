let saldo = 100000;
let transaksi= []
let pin = prompt("Buat PIN anda:")
let inputPin = prompt("Masukkan PIN anda")
let konfir = inputPin == pin? prompt("ingin cek/narik/setor/transaksi?") : alert("Anda salah memasukkan pin")

while(konfir == "cek" || konfir == "narik" || konfir == "setor" ||  konfir == "transaksi"){
    if(konfir == "cek"){
        alert(`Your saldo is Rp.${saldo}`);
      }

     if(konfir == "narik"){
        let narik = parseInt(prompt('Mau narik duit berapa?'));
         if(isNaN(narik) ){
             alert("Anda belum narik uang")
            }else if(narik > saldo){
                alert("saldo anda tidak mencukupi")
            }else{  
                saldo -= narik
                transaksi.push(`Penarikan uang sejumlah ${narik}`)
                alert(`Penarikan uang Rp.${narik} berhasil. Sisa saldo anda Rp.${saldo}`)
         }
    }   

    if(konfir == "setor"){
        let setor = parseInt(prompt('Mau setor berapa?'));
         if(isNaN(setor) ){
            alert("anda belum setor apapun")
         }else{
            saldo += setor
            transaksi.push(`Pensetoran uang sebesar ${setor}`)
            alert(`Pensetoran uang Rp.${setor} berhasil. Sisa saldo anda Rp.${saldo}`)
         }
    }

    if(konfir == "transaksi"){
        if(transaksi.length === 0){
            alert("Belum ada transaksi")
        }else{
            alert("Riwayat transaksi anda:\n\n" + transaksi.join("\n") + `\n\n Total uang anda sekarang sebesar ${saldo}`)
        }
    }
konfir = inputPin == pin? prompt("ingin cek/narik/setor/transaksi?") : alert("Anda salah memasukkan pin ")
}
alert("Thank you ╰(*°▽°*)╯")
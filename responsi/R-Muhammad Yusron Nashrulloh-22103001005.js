function cekJumlah(arr) {
    if (arr.length % 2 === 0) {
      console.log("Array berjumlah genap");
      return "genap";
    } else {
      console.log("Array berjumlah ganjil");
      return "ganjil";
    }
  }
  
  function cariAngkaGenap(arr) {
    for (let elemen of arr) {
      if (elemen % 2 === 0) {
        console.log(elemen);
      }
    }
  }
  
  function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = 1; j < arr.length; j++) {
        if (arr[j - 1] > arr[j]) {
          [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
        }
      }
    }
  
    console.log(arr);
  }
  
  const arr1 = Array.from({length: 5}, () => Math.floor(Math.random() * 10) + 1);
  const arr2 = Array.from({length: 4}, () => Math.floor(Math.random() * 10) + 1);
  
  const jumlah1 = cekJumlah(arr1);

  if (jumlah1 === "ganjil") {
    cariAngkaGenap(arr1);
  }
  else {
    bubbleSort(arr1);
  }
  
  const jumlah2 = cekJumlah(arr2);
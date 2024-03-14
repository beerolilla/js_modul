//1) feladat:
function TeglaTestFelszin(a,b,c) {
    return 2*(a*b+b*c+c*a);
    };
    
    document.write(TeglaTestFelszin(2, 3, 4));
    document.write("<br>"+TeglaTestFelszin(1,3,5));
    document.write("<br>"+TeglaTestFelszin(2,4,8));
    
   //2) feladat:
   function TeglaTestTerfogat(a, b, c) {
    return a*b*c;
       };
       
       document.write(TeglaTestTerfogat(2,3,4));
       document.write("<br>"+TeglaTestTerfogat(1,3,5));
       document.write("<br>"+TeglaTestTerfogat(2,4,8))

    //3) feladat:
    function PhErtek(vizsgaltErtek) {
        if (vizsgaltErtek===7){
        return "semleges";}
        else if (vizsgaltErtek>7){
        return "lúgos";}
        else {
        return "savas";}
        }
        document.write(PhErtek(9));
        document.write("<br>"+PhErtek(5.5));
        document.write("<br>"+PhErtek(7));
        
    //4) feladat:
    function ElsoNSzamOsszege(szamokMennyisege){
        let N=0;
        for(let i=1; i<=szamokMennyisege; i++){
        N+=i;
        }
        return N;
        }
        
        document.write(ElsoNSzamOsszege(3));
        document.write("<br>"+ElsoNSzamOsszege(10));
        document.write("<br>"+ElsoNSzamOsszege(21));

    //5) feladat:
    
    function PrimEWhile(szam) {
        if (szam===1) {
        return false;}
        else {
        let i=2;
        while (i<szam) {
        if (szam% i===0) {
        return false;}
        i++;}
        return true;}
        }
    
    function PrimekSzama(vizsgaltTomb) {
        let primSzamdb = 0;
        for (let i=0; i<vizsgaltTomb.length; i++) {
        if (PrimEWhile(vizsgaltTomb[i])) {
        primSzamdb++;}
   
        }
    
        return primSzamdb;
        }
        document.write(PrimekSzama([13,7,12,15]));
        document.write("<br>"+PrimekSzama([1,5,17,29]));
        document.write("<br>"+PrimekSzama([2,3,7,11]));
        document.write("<br>"+PrimekSzama([1,2,3,14]));

    //6) feladat:
    function EkezetesBetukSzama(vizsgaltSzoveg){
        let ekezetesBetuk="áéíóöőúüűÁÉÍÓÖŐÚÜŰ";
        let KarakterMennyiseg=0;
        for(let i=0; i<vizsgaltSzoveg.length; i++){
        let ekezetVanE=vizsgaltSzoveg[i];
        if (ekezetesBetuk.includes(ekezetVanE)){
        KarakterMennyiseg++;
        }
        }
        return KarakterMennyiseg;
        }
        document.write(EkezetesBetukSzama("Szeretem a programozást")+"<br>");
        document.write(EkezetesBetukSzama("Géza kék az ég")+"<br>");
        document.write(EkezetesBetukSzama("<br>Répa, retek, mogyoró"));

    //7) feladat:
    function SzamVisszafele(megforditandoSzam){
        let forditottSzam = "";
        let szamKarakter = megforditandoSzam.toString();
        for(let i = szamKarakter.length-1; i>=0; i--){
            forditottSzam += szamKarakter[i];
        }
        return forditottSzam;
    }
    
    document.write(SzamVisszafele(2024)+"<br>");
    document.write(SzamVisszafele(1222)+"<br>");
    document.write(SzamVisszafele(1848));

    //8) feladat:
    
    function SportagHelyezesek (vizsgaltObjektumTomb, sportagNeve, keresettHelyezes){
        let helyezesekSzama=0;
        for (let i=0; i<vizsgaltObjektumTomb.length;i++){
        let Objektum=vizsgaltObjektumTomb[i];
        if (Objektum.sportag===sportagNeve && Objektum.helyezes===keresettHelyezes){
        helyezesekSzama++;
        }
        }
        return helyezesekSzama;
        }
        
        document.write(SportagHelyezesek (helsinki, "torna", 1)+"<br>");
        document.write(SportagHelyezesek (helsinki, "ottusa", 1)+"<br>");
        document.write(SportagHelyezesek (helsinki, "uszas", 2)+"<br>");
        document.write(SportagHelyezesek (helsinki, "atletika", 3));

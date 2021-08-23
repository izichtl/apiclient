const { match } = require("core-js/fn/symbol");
const { normalizeStyle } = require("vue");



function cleanData(){
    this.client_a = 'XBhIiwiaWF0I'
    this.client_b = 'ABgISwipiF9L'

}

cleanData.prototype.cleanName= function(data){
    let newData = []
    data.contacts.forEach(element => {

        //regex estava bugando com grupos
        removeSrta = element.name.replace(/Srta\.\s/g, "")
        removeSra = removeSrta.replace(/Sra\.\s/g, "")
        removeSr = removeSra.replace(/Sr\.\s/g, "")

        let nome = removeSr.toUpperCase()
        let model = {name: nome, cellphone: element.cellphone }
        
        newData.push(model)
    });
    return newData
}
cleanData.prototype.cleanCellphone= function(data){
    let newData = []
    data.forEach(element => {
        
        const twoDig = /\d{2}/
        const fourDig = /\d{4}/g
        
        let matchPais = element.cellphone.match(twoDig)
        removePais = element.cellphone.replace(matchPais[0], "")
        
        let matchDdd = removePais.match(twoDig)
        removeDdd = removePais.replace(matchDdd[0], "")
        
        let cellphone_a = removeDdd.match(fourDig)
        removeCellphone_a = removePais.replace(cellphone_a[0], "")
        
        let cellphone_b = removeCellphone_a.match(fourDig)
        

        let model = {
            name: element.name, 
            pais: matchPais[0], 
            ddd: matchDdd[0], 
            cellphone_a: cellphone_a[0], 
            cellphone_b: cellphone_b[0]  }
        
        newData.push(model)
    });
    
    return newData

}


module.exports = {
    cleanData: cleanData
}
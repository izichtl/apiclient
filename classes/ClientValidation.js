


function ClientValidation(){
    this.client_a = 'XBhIiwiaWF0I'
    this.client_b = 'ABgISwipiF9L'

}

ClientValidation.prototype.keyCheck= function(cliente){
    if(cliente.id === '01'){
       let check_a = this.client_a === cliente.CHAVE_CLIENTE
        return check_a
        
    }
    if(cliente.id === '02'){
        let check_b = this.client_b === cliente.CHAVE_CLIENTE
        return check_b
        
    } 
}


module.exports = {
    ClientValidation: ClientValidation
}
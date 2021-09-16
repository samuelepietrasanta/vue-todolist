/**
 * 
 * Stampare in pagina un item per ogni elemento contenuto in un array
 * Ogni item ha una icona "x" associata: cliccando su di essa, l'item viene rimosso dalla lista
 * Predisporre un input per aggiungere un nuovo item alla lista: digitando il tasto invio 
 * oppure ciccando su un pulsante, il testo digitato sarà aggiunto alla lista 
 * 
*/

let app = new Vue({

    el:'#app',

    data:{
        supermercato : ['latte', 'uova' , 'cereali' , 'frutta', 'carne', 'pane', 'dolcetto tattico'],

        inputText:'',

        isDone : false,
    },

    methods:{
        deleteItem : function(indice){
            this.supermercato.splice(indice,1);
        },

        addItem : function(){
            if(this.inputText.trim(' ').length > 0){
                this.supermercato.push(this.inputText);
            }
            this.inputText = '';
        },

        lineThrough : function(){
            if(this.isDone == false){
                this.isDone = true;
            }else {this.isDone = false}
            console.log(this.isDone)
        }


    },


})
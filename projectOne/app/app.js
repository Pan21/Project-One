new Vue({
    el:'#gameSetup',


    //Contains the value's of the game board spots.
    data (){
        return {
            gameboard: [

                [
                    " ", " ", " "
                ],
                [
                    " ", " ", " "
                ],
                [
                    " ", " ", " "
                ]

            ],

            //Assigns the Default Mark to be used on the first click.
            next: "X"
        }
    },

    methods: {
        //markboard function is the Core of the program that handles adding the marks to the board. (Heh... Marks... board...)
        markBoard: function ( row, coll ){
            let progress = [


                //slice takes everything from the chosen array
                this.gameboard[0].slice(),
                this.gameboard[1].slice(),
                this.gameboard[2].slice(),
            ];
            progress[row][coll] = this.next;
            this.gameboard = progress;

            //Is used to determine which mark to apply
            if(this.next == "X"){
                this.next = "O"
            }
            else{
                this.next = "X"
            }
        },
        //The below function is used to Reset the board when the Restart button is clicked.
        restart: function (){
            let progress = [
                [
                    " ", " ", " "
                ],
                [
                    " ", " ", " "
                ],
                [
                    " ", " ", " "
                ]
            ];
            this.gameboard = progress;
        }
    }
})
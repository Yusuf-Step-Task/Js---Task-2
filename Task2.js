let Name 
do {
    Name = prompt("Enter name: ");
}while (Name == "" || Name == null);    

console.log(`Salam ayqa ${Name}`);

let Age = prompt("Enter Age:")
if (Age < 18)
    {
        console.log(`siz yetkin deyilsiniz!!!`);
    }
    else if(Age >= 18 )
    {
        console.log(`siz yetkinsiniz`);
    }
    else
    {
        console.log(`Error: ${Name}, Age valuesi duzgun daxil edilmedi !!!!!!`);
    }

for(let i =0 ;i < 10 ; i++)
    {
        console.log(`Number ${i+1}`);
    }

    let i1 = 0 ;
    while(true)
    {
        if(i1 <= 20)
            {
            if(i1%2 == 0)
            {
                console.log(`Cut eded: ${i1}`);
                i1++;
            }
            else
                {
                    i1++;
                }
        }
        else{
            break;
        }
    }   

    let i = 0 ;
    while(true)
    {
        if(i == 7)
            {
                console.log(`7 tapildi`);
                break;
            }    
            else
                {
                    i++;
                }

    }




let number = prompt("Musbet menfi yoxlamasi ucun eded daxil edin: ");
let text = (number > 0) ? `Number ${number} musbetdir` : (number < 0) ? `Number ${number} menfidir` : `Number ${number} sifirdir`;
console.log(text);


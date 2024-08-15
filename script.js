//==========Variable Part Start=========//
let todoinput           = document.querySelector('.todoinput')
let Add_button          = document.querySelector('.Add_button')
let All_todo            = document.querySelector('.All_todo')
let numbers             = document.getElementById('numbers')
let count               = document.querySelector('.count')
let i                   = 0 
count.innerHTML         = i
let done_task           = document.querySelector('.done_task')
let done_number         =0
done_task.innerHTML     = done_number
let progressbar         = document.getElementById('progressbar')
let progress            = document.getElementById('progress')      
//==========Function part Start=========//
Add_button.addEventListener('click' , ()=>{
    if(todoinput.value==''){
        alert('Task ki tor bap dibe')
    }
    else{
        i++
        count.innerHTML = i
        All_todo.style = 'display:block'
        
        
        
        //==========Create Element========//
        let single_todo         = document.createElement('div')
        let singletodoinput     = document.createElement('input')
        let Edit_button         = document.createElement('button')
        let Delete_button       = document.createElement('button')
        let Done_button         = document.createElement('button')

        //==========Make Apend Child========//
        All_todo.appendChild(single_todo)
        single_todo.appendChild(singletodoinput)
        single_todo.appendChild(Edit_button)
        single_todo.appendChild(Delete_button)
        single_todo.appendChild(Done_button)

        //========== Add Class Name ========//
        single_todo.classList.add('Single_todo')
        Edit_button.classList.add('Edit_button')
        Delete_button.classList.add('Delete_button')
        singletodoinput.classList.add('singletodoinput')
        Done_button.classList.add('Done_button') 

       //========== Add Content ========//
       Edit_button.innerHTML = 'Edit'
       Delete_button.innerHTML = 'Delete'
       singletodoinput.value = todoinput.value
       todoinput.value = ''
       All_todo.value =''
       Done_button.innerHTML = 'Done'

      //========== Add attribute ========//
         singletodoinput.setAttribute('readonly' , 'readonly')

         Edit_button.addEventListener('click' , ()=>{
            if(Edit_button.innerHTML == 'Edit'){
                singletodoinput.removeAttribute('readonly' , 'readonly')
                Edit_button.innerHTML = 'Update'
            }
            else{
                singletodoinput.setAttribute('readonly' , 'readonly')
                Edit_button.innerHTML = 'Edit'
            }
         })


            Delete_button.addEventListener('click' , ()=>{
                i--
                count.innerHTML = i
                All_todo.removeChild(single_todo)
            
                done_number--
                done_task.innerHTML = done_number


        })
    
        Done_button.addEventListener('click' , ()=>{
            if(Done_button.innerHTML == 'Done'){
                singletodoinput.style = 'text-decoration: line-through ; color: cadetblue'
                Done_button.innerHTML = 'Undo'

                done_number++
                done_task.innerHTML = done_number
                console.log(done_number)

                
                
            }
            else{
                singletodoinput.style = 'text-decoration: none'
                Done_button.innerHTML = 'Done'
                done_number--
                done_task.innerHTML = done_number
                //console.log(done_number)
            } 
        })
        
       // const Updatestats = () =>{
         //   const completedTasks = tasks.filter(task => task.completed).length
           // const totalTasks = tasks.length
            //const progress =(completedTasks / totalTasks) * 100
            //const progressBar = document.getElementById('.progress')
           // progressBar.style.width = `${progress}%`

           // document.getElementById('numbers').innerHTML = `${completedTasks} / ${totalTasks} tasks completed`
            
        //}
    }
})




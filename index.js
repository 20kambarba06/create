let container = document.querySelector('.container')
let center = document.querySelector('.center')

let div_create = document.querySelector('.div-create_post')
let input_create = div_create.querySelector('.creed')
let yes = div_create.querySelector('.es')
let no = div_create.querySelector('.no')
let close = div_create.querySelector('.close')

let form = document.forms.todo
let todos = [
    {
        id: Math.random(),
        isDone: false,
        task: 'ubit diyora',
        time: new Date().getHours() + ':' + new Date().getMinutes()
    },
    {
        id: Math.random(),
        isDone: false,
        task: 'kupit moloko',
        time: new Date().getHours() + ':' + new Date().getMinutes()
    }
]


form.onsubmit = (event) => {
    event.preventDefault()

    let task = {
        id: Math.random(),
        isDone: false,
        time: new Date().getHours() + ':' + new Date().getMinutes()
    }

    let fm = new FormData(form)

    fm.forEach((value, key) => {
        task[key] = value
    });

    todos.push(task)
    reload(todos)
}

function reload(arr) {
    container.innerHTML = ""

    for (let item of arr) {
        container.innerHTML += `
            <div class="item ${item.isDone ? "done" : ''}" id="${item.id}" >
                <div class="info">
                    <span>${item.task}</span>
                    <i>${item.time}</i>
                </div>
                
                <img class="createElem" src="./assets/icons/cre.svg" alt="">
                <img class="deleteElem" src="./assets/icons/x.svg" alt="">

            </div>
        `
        let deletItem = document.querySelectorAll('.deleteElem')
        let tes = document.querySelectorAll('span')

        let tere = document.querySelectorAll('.item')
        let creat = document.querySelectorAll('.createElem')

        deletItem.forEach(elem => {
            elem.onclick = (event) => {
                let id = parseFloat(event.target.parentNode.id)

                todos = todos.filter(item => item.id !== id)
                reload(todos)
            }
        },


            tere.forEach(srt => {
                srt.onclick = (event) => {
                    let id = +srt.id
                    let finded = todos.find(item => item.id === id)
                    finded.isDone = !finded.isDone
                    console.log(finded);
                    reload(todos)
                }
            })),

            creat.forEach(hemi => {
                hemi.onclick = () => {
                    container.classList.remove('container')
                    container.classList.add('container_post')

                    div_create.classList.remove('div-create_post')
                    div_create.classList.add('div-create')

                    center.classList.remove('center')
                    center.classList.add('center_post')




                }
            }),

            no.onclick = () => {
                input_create.value = ""

            }


        yes.onclick = () => {
            tes.forEach(zet => {
                zet.innerHTML = input_create.value
                todos.forEach(vett => {
                    vett.task = input_create.value
                })
            })
        }



        close.onclick = () => {
            container.classList.add('container')
            container.classList.remove('container_post')

            div_create.classList.add('div-create_post')
            div_create.classList.remove('div-create')

            center.classList.add('center')
            center.classList.remove('center_post')
        }

    }
}
reload(todos)
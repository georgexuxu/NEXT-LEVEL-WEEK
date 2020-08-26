document.querySelector('#add-time')
.addEventListener('click', cloneField)

function cloneField() {
    const newFieldConatainer = document.querySelector('.schedule-item').cloneNode(true)

    const fields = newFieldConatainer.querySelectorAll('input')
    
    fields.forEach(function(field){
      field.value = ''
    })

    document.querySelector('#schedule-items').appendChild(newFieldConatainer) 
}
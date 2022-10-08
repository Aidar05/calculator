
function change_input_1(){
  document.getElementById('text').value += 1
}

function change_input_2(){
  document.getElementById('text').value += 2
}

function change_input_3(){
  document.getElementById('text').value += 3
}

function change_input_4(){
  document.getElementById('text').value += 4
}

function change_input_5(){
  document.getElementById('text').value += 5
}

function change_input_6(){
  document.getElementById('text').value += 6
}

function change_input_7(){
  document.getElementById('text').value += 7
}

function change_input_8(){
  document.getElementById('text').value += 8
}

function change_input_9(){
  document.getElementById('text').value += 9
}

function change_input_0(){
  document.getElementById('text').value += 0
}

function change_input_plus(){
  document.getElementById('text').value += '+'
}

function change_input_minus(){
  document.getElementById('text').value += '-'
}

function change_input_multiply(){
  document.getElementById('text').value += '*'
}

function change_input_divide(){
  document.getElementById('text').value += '/'
}

function change_input_C(){
  document.getElementById('text').value = ''
}

function clear_last_symbol(){
  let v = document.getElementById('text').value
  let result = v.substring(0, v.length-1)
  document.getElementById('text').value = result

}


var __file__ = new ByteStream(byteresult, textresult, loadstatus)
// var __fn__ = '' //

btnDump.onclick = 
btnSave.onclick =
btnClear.onclick = function(e){
  var __status__ = {
    "btnDump" : function(){
        __file__.openDumpStream(btnStream.files[0] || __fn__)
        //__fn__ = btnStream.files[0] || __fn__ //
        },
    "btnSave" : function(){
        __file__.saveDumpStream(btnSaveStream.files[0])
        },
    "btnClear" : function(){
        __file__.proceed = false
        byteresult.value = ''
        textresult.value = ''
        },
  }
  if(__status__[e.target.id]){
    __status__[e.target.id]()
  }
}

byteresult.addEventListener("scroll", 
  function(e){
    if(e.target.id == 'byteresult'){
      textresult.scrollTop = e.target.scrollTop
    }
  })

textresult.addEventListener("scroll", 
  function(e){
    if(e.target.id == 'textresult'){
      byteresult.scrollTop = e.target.scrollTop
    }
  })

btnSave:click = function(w){
  alert(this.files[0].name)
}

btnStream.addEventListener('change',() => { 
__file__.openDumpStream(btnStream.files[0]) 
}, false)

/*
btnStream.onmessage = function(e){
    console.log( e.toString )
}*/

textresult.ondrop = 
byteresult.ondrop = function(e){
    __file__.openDumpStream( e.dataTransfer.files[0] )
}

divCode00.onclick = function(e){
    code00.checked=true
    code01.checked=code02.checked=false
    byteresult.style.display=
    textresult.style.display='inline'
}

divCode01.onclick = function(e){
    code01.checked=true
    code00.checked=code02.checked=false
    byteresult.style.display='none'
    textresult.style.display='inline'
}

divCode02.onclick = function(e){
    code02.checked=true
    code00.checked=code01.checked=false
    byteresult.style.display='inline'
    textresult.style.display='none'
}
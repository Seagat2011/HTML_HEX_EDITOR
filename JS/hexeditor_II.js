

var __file__ = new ByteStream(byteresult, textresult, loadstatus)
 
input:onclick = function(e){
  var __status__ = {
    "btnDump" : function(){
        __file__.openDumpStream(btnStream.files[0])
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
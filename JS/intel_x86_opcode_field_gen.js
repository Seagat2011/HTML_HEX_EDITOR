
let two_byte_excludes = new Set()
two_byte_excludes.add( '04' )
two_byte_excludes.add( '05' )
two_byte_excludes.add( '0a' )
two_byte_excludes.add( '0c' )
two_byte_excludes.add( '0e' )
two_byte_excludes.add( '0f' )
two_byte_excludes.add( '24' )
two_byte_excludes.add( '25' )
two_byte_excludes.add( '26' )
two_byte_excludes.add( '27' )
two_byte_excludes.add( '36' )
two_byte_excludes.add( '39' )
two_byte_excludes.add( '3c' )
two_byte_excludes.add( '3d' )
two_byte_excludes.add( '3e' )
two_byte_excludes.add( '3f' )
two_byte_excludes.add( '7a' )
two_byte_excludes.add( '7b' )
two_byte_excludes.add( 'a6' )
two_byte_excludes.add( 'a7' )
two_byte_excludes.add( 'ff' )
let block = []
let block2 = []
for(let i=0; i<256; i++){
    let u = `${ i<16 ? '0': '' }${ i.toString(16) }`
    block .push(`    '${ u }': 'x86',`)
    block2.push(`    '0f ${ u }': '${ two_byte_excludes.has( u ) ? '--' : 'x86' }',`)
}
textresult.value = ['let single_byte_opcodes = {',block.join('\n'),'}'].join('\n')
textresult.value += ['\n','let two_byte_opcodes = {',block2.join('\n'),'}'].join('\n')
import {Box,Text,Image} from '@chakra-ui/react';

function Article(){
    return(
        <Box
        display='flex'
        w='1318px'
        h='600px'
       
        margin='auto'
        marginTop='150px'>
            <Box
            w='40%'
            h='400px'
            >
                <Image
                src='/article.jpg'
                w='100%'
                h='100%'
                
                padding='50px'
                paddingLeft='90px'
                />
            </Box>
            <Box
           w='60%'
           h='400px'>
                <Text
                as
                ='h1'
                fontSize='xx-large'
                fontWeight='bold'
                textAlign='start'
                padding='50px'>Article title</Text>
                
                <Text
                as='h2'
                fontWeight='medium'
                fontSize='medium'
                paddingLeft='50px'
                w='50%'
                h='auto'
                
                >hbcjwhbf fwe vmeof ldfod  ofimoimtiei oepo jpeogmeprgm0rork fepfgijergo jhrfb fierfnierb engfiergeruge orifnoe norfnrnergergr ug goerge gebgo mvimv  velr bo lrg oerg krj erg ornorno rgowgw ngowirgw rgognwignwri gnowg owngowgn</Text>
                <br/>
                <Box
                display='flex'>
                    <Box>
                        <Image
                        src='/dp.jpg'
                        w='70px'
                        h='70px'
                        borderRadius='50%'/>
                    </Box>
                    <Box
                    padding='10px'>
                        <Text
                        as='h2'
                        fontSize='small'
                        fontWeight='bold'
                        >Full Name</Text>
                        
                        <Text
                           as='h2'
                           fontSize='small'
                           fontWeight='bold'>Position</Text>
                    </Box>
                </Box>
            </Box>

        </Box>
    )
}
export default Article;
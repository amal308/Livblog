import {Box,Text} from '@chakra-ui/react';
function Download(){
    return(

        <Box
        w='1318px'
        h='360px'
        margin='auto'
        bgColor='blue.800'
        paddingTop='100px'>
            <Text
            textAlign='center'
            margin='auto'
            fontWeight='extrabold'
            color='white'
            fontSize='5xl'
            h='auto'
            w='1318px'>Try it for free</Text>
            <Text
            textAlign='center'
            margin='auto'
            fontWeight='bold'
            color='white'
            fontSize='1xl'
            h='auto'
            w='1318px'>Diagnostics|Hospitalization|Doctor consultations|At discounted rates-Always</Text>
            <Box
            as='button'
            textAlign='center'
            marginTop='20px'
            
            fontWeight='extrabold'
            color='blue.800'
            fontSize='2xl'
            h='auto'
            w='200px'

            margin='auto'
            marginLeft='560px'
            bgColor='white'
           borderRadius='30px'
           
            >Download</Box>

        </Box>
    )
}
export default Download;


import {Box,Text} from '@chakra-ui/react';
function Blog(){
    return(
        <Box>
            <Box
            backgroundImage='/image.jpg'
            backgroundRepeat='no-repeat'
            backgroundSize='cover'
            margin='auto'
            w='1318px'
            h='700px'>
                <Text
                as='h1'
                fontSize='50px'
                fontWeight='bold'
                color='whiteAlpha.900'
                textAlign='center'
                paddingTop='290px'>We Blog for your health</Text>
                <Text
                as='h2'
                fontSize='20px'
                color='whiteAlpha.900'
                textAlign='center'>We're passionate about holistic well-being of body, mind and soul.</Text>
                

            </Box>

        </Box>
    )
}
export default Blog;
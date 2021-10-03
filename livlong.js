import {Box,Text,UnorderedList,ListItem,List} from '@chakra-ui/react';
function Livlong(){
    return(
        <Box
        w='1318px'
        h='500px'
        margin='auto'
        bgColor='gray.200'

        >
            <Box display='flex'
        w='1318px'
        h='400px'
        >
            <Box
            w='100px'
            h='auto'
            margin='auto'
            marginTop='200px'
            >
                <img src='/livlong.jpg' alt='livlong'
                w='100%'
                h='100%'/>
            </Box>
            <Box display='flex'
            w='70%'
            h='auto'
            justifyContent='space-evenly'
            marginTop='100px'
            >
                <Box>
                    <Text
                    fontSize='2x1'
                    fontWeight='bold'>Company</Text>
                    <List>
                        <ListItem>Home</ListItem>
                        <ListItem>Product</ListItem>
                        <ListItem>About</ListItem>
                        <ListItem>Pricing</ListItem>
                        <ListItem>Blog</ListItem>
                        <ListItem>Contact</ListItem>

                    </List>
                    
                  
                </Box>
                <Box>
                <Text
                fontSize='2x1'
                fontWeight='bold'>Social</Text>
                    <List>
                        <ListItem>Facebook</ListItem>
                        <ListItem>Twitter</ListItem>
                        <ListItem>Linkedin</ListItem>
                        <ListItem>Instagram</ListItem>
                        

                    </List>
                </Box>
                <Box>
                <Text
                fontSize='2x1'
                fontWeight='bold'>Legal</Text>
                    <List>
                        <ListItem>Private Policy</ListItem>
                        <ListItem>Terms of Services</ListItem>
                        
                    </List>
                </Box>
            </Box>
        
        </Box>
        <Box
        w='1318px'
        h='auto'>
        <Box
        w='80%'
        h='2px'
        bgColor='black'
        margin='auto'>

        </Box>
        </Box>
      
        <Text
        textAlign='center'
        fontWeight='normal'
        fontSize='15px'
        margin='auto'>
            2021 @ Livlong protection and wellness solutions limited. All rights reserved.
        </Text>
        </Box>

        
    )
}
export default Livlong;
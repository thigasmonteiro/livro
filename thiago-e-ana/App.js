import { StyleSheet, Text, View, Image, FlatList,  } from 'react-native';

function Card(props) {
  return(
    <View style={styles.card}>
        <Image style={{ resizeMode:'stretch', width: '50%', height:500  }} source={{uri:props.livro.capa}} />
        <Text> {props.livro.preco}</Text>
        <Text> R$ {props.livro.preco} </Text>
    </View>
    )
}

export default function App(){
    const livros =[
        {
          capa: 'https://m.media-amazon.com/images/I/510e3m4siSL._SX324_BO1,204,203,200_.jpg',
          titulo: 'livro 1',
          preco: 33
        },
        {
          capa: ' ',
          titulo: 'livro 1',
          preco: 33
        },
        {
          capa: 'https://m.media-amazon.com/images/I/510e3m4siSL._SX324_BO1,204,203,200_.jpg',
          titulo: 'livro 1',
          preco: 37
        },
        {
          capa: 'https://m.media-amazon.com/images/I/510e3m4siSL._SX324_BO1,204,203,200_.jpg',
          titulo: 'livro 1',
          preco: 12
        },
    ]


  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30, fontWeight: 'bold' }} >Livros</Text>
      <View style={styles.conteudo}>
          {livros.map(livro => <Card livro={livro}/>)}
      </View>
    </View>
  );
  }
  const styles = StyleSheet.create({
    container: {
      flex:1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop:20,
      marginTop: 40,
      backgroundColor: '#ecf0f1',
    },
    conteudo:{
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      backgroundColor: '#ccc',
      paddingTop:20,
      alignItems:'center',
      width:'200%',
      
    },
    card:{
      width:'100%',
      height:400,
      backgroundColor:'#0d0',
      borderRadius:10,
      margin:10
    }

  });

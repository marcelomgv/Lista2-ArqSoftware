# Arquivo para rodar script
# chmod +x scriptTeste.sh (tornar executável)
# ./scriptTeste.sh (rodar diretamente no terminal)

echo 'Saída em HTML :'
node index.js html 

echo 'Saída em txt :'
node index.js txt 

echo 'Teste concluído'
tail -f /dev/null
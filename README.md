# kubertes-deploy
Guia para subir uma aplicação do Docker para um cluster kubernetes.

## Clonando o projeto
Faça o pull dos arquivos do projeto com: 
```
git clone git@github.com:ccintianunes/kubernetes-deploy.git
```
## Criando a imagem Docker
Agora, estamos prontos para criar a imagem Docker a partir do Dockerfile. No terminal, dentro do diretório do projeto, execute o seguinte comando:
```
docker build -t minha-aplicacao:latest . 
```
Isso criará uma imagem Docker chamada "minha-aplicacao" a partir do Dockerfile presente no diretório atual (note o ponto no final do comando).
Certifique-se de estar no diretório que contém os arquivos app.py, Dockerfile e requirements.txt.

## Criando o container 
```
docker run -d -p 8080:5000 -ti minha-aplicacao:latest
```
O parâmetro -p 8080:3000 mapeia a porta 8080 do host para a porta 3000 do container. Agora, o servidor estará acessível em http://localhost:8080.

## Subindo a imagem pro DockerHub
1. conecte-se com seu dockerhub pelo seu usuário e senha.
```   
docker login
```
3. Marque sua imagem com o nome completo para o registro:
```
docker tag minha-aplicacao:latest seu-usuario/minha-aplicacao:latest
```
4. Substitua 'seu-usuario' pelo nome do seu usuário ou organização no registro de container.

5. Envie a imagem para o registro:
```
docker push seu-usuario/minha-aplicacao:latest
```
Agora, sua imagem está no registro de container.

5. No arquivo deployment.yaml, substitua 'seu-usuario' pelo nome do seu usuário ou organização no registro de container.

![image](https://github.com/ccintianunes/kubernetes-deploy/assets/110416764/b3994842-7548-4869-a596-61ea92364119)


6. Por fim Implante o deployment.yaml no Kubernetes:
```
kubectl apply -f deployment.yaml
```
## Expondo a Aplicação
Agora, vamos criar um serviço para expor a aplicação para o mundo externo. 
```
kubectl apply -f service.yaml
```

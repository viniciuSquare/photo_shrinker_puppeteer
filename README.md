## ⚙️ O projeto
Esta solução foi desenvolvida na necessidade de encolher cerca de 100 fotos de um ensaio para um e-commerce onde o limite de tamanho são 10 MB.

![Puppeteer icon](https://user-images.githubusercontent.com/10379601/29446482-04f7036a-841f-11e7-9872-91d1fc2ea683.png) 

[Puppeteer](puppeteer.com) abre o site [Squoosh](https://squoosh.app/) onde a foto será processada então, quando disponível, a foto com tamanho reduzido será baixada.
## 🤖 Como usar a solução
As imagens a serem processadas devem estar no diretório `/images` do projeto. Com os arquivos no lugar, rodar `node shrink_photos.js`.
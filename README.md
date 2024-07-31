# (old) siliconecb.cc

## ❗ no longer available at siliconecb.cc ❗
previous version of my website built from a template, see my new (fully custom) site at https://siliconecb.cc

this repo will be archived and the site most likely phased out in the near future

----
## installation

1. Clone the repository:
```
git clone https://github.com/silicone-fig/siliconecb.cc.git
```

2. Install dependencies:
```
npm install
```

3. Build the project:
```
npm run build
```
## running locally
5. To run the development server:
```
npm run dev
```

6. To run the production preview server:
```
npm run preview
```

if you encounter a Vite permission error, try:
```
rm -rf node_modules
npm install
```
## running with docker
1. Build dockerfile:
```
docker build -t siliconecb.cc .
```
2. Run container:
```
docker run -p 3000:3000 --name [container name] siliconecb.cc
```

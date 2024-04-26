# siliconecb.cc

my personal portfolio and blog website where I showcase my projects and other stuff.

## Installation

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
## Usage
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
## Docker
1. Build dockerfile:
```
docker build -t siliconecb.cc .
```
2. Run container:
```
docker run -p 3000:3000 --name [container name] siliconecb.cc
```
<sub style="font-size: 0.5em;">____</sub>

<sub style="font-size: 0.5em;">production page uses Shynet Analytics for privacy-friendly tracking, if you prefer not to be tracked, block ``utm.siliconecb.cc`` in your DNS/ad block list.</sub>

<sub style="font-size: 0.5em;">under active development, contributions are welcome 🙌</sub>

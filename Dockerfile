FROM node:16
WORKDIR /app/public
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 4173
CMD ["npm", "run", "preview"]

# Build the files
FROM node:18-alpine as build
WORKDIR /usr/app
COPY . .
RUN npm install
RUN npm run build

# Copy the built files to the production environment
FROM node:18-alpine
WORKDIR /usr/app
COPY package*.json ./
RUN npm install --production
COPY --from=build /usr/app/dist ./dist

# Start the server
CMD npm run start
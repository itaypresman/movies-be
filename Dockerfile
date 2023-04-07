FROM node:18.15.0
LABEL authors="Itay Presman"
RUN mkdir /moovies-be
WORKDIR /moovies-be
COPY . /moovies-be
RUN apt-get update
RUN apt-get install -y mc
RUN npm i
EXPOSE 3000
CMD ["npm", "run-script", "start"]

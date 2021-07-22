FROM jekyll/jekyll as build

RUN mkdir /moralbwebsite
COPY . /moralbwebsite
WORKDIR /moralbwebsite

RUN chmod 644 /moralbwebsite/assets/images/*
RUN chown -R jekyll /moralbwebsite

RUN bundle install && bundle exec jekyll build -d public

FROM nginx

COPY --from=build /moralbwebsite/public/ /usr/share/nginx/html/
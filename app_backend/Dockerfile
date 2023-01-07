# Install composer
FROM composer:latest AS composer

COPY . /app/backend
WORKDIR /app/backend

RUN composer install --no-dev --no-scripts --no-autoloader --no-interaction --ignore-platform-reqs

### PHP ###

# Install PHP
FROM php:8.1-fpm-alpine AS php

# Add docker-php-extension-installer script
ADD https://github.com/mlocati/docker-php-extension-installer/releases/latest/download/install-php-extensions /usr/local/bin/

# Install dependencies
RUN apk add --no-cache \
    bash \
    curl \
    freetype-dev \
    g++ \
    gcc \
    git \
    icu-dev \
    icu-libs \
    libc-dev \
    libzip-dev \
    make \
    mysql-client \
    nodejs \
    npm \
    oniguruma-dev \
    yarn \
    openssh-client \
    postgresql-libs \
    rsync \
    zlib-dev

# Install php extensions
RUN chmod +x /usr/local/bin/install-php-extensions && \
    install-php-extensions \
    @composer \
    redis-stable \
    imagick-stable \
    xdebug-stable \
    bcmath \
    calendar \
    exif \
    gd \
    intl \
    pdo_mysql \
    pdo_pgsql \
    pcntl \
    soap \
    zip

# Setup working directory
WORKDIR /var/www/

# Create User and Group
RUN groupadd -g 1000 www && useradd -u 1000 -ms /bin/bash -g www www

# Grant Permissions
RUN chown -R www /var/www

# Select User
USER www

# Copy permission to selected user
COPY --chown=www:www . .

EXPOSE 9000

CMD ["php-fpm"]

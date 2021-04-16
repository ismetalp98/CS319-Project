# smartblock-backend


# Source Code Setup
    vim enable_smartblock.sh
      export SB_PROJECT_PATH='/home/sahap/Projects/smart-block'
      export JAVA_HOME=/home/sahap/.p2/pool/plugins/org.eclipse.justj.openjdk.hotspot.jre.full.linux.x86_64_15.0.2.v20210201-0955/jre
    source enable_smartblock.sh

# Database Setup


    export SB_PROJECT_PATH='PROJECT PATH HERE'
    mkdir --mode=700 ${SB_PROJECT_PATH}/smartblock-pg/data
    mkdir --mode=700 ${SB_PROJECT_PATH}/smartblock-pg/socket
    
    
    /usr/lib/postgresql/13/bin/initdb \
      --no-locale \
      --encoding=UTF8 \
      --pgdata=${SB_PROJECT_PATH}/smartblock-pg/data \
      --auth-local=peer \
      --auth-host=trust \
      --username=$USERNAME
    
    
    cat >> ${SB_PROJECT_PATH}/smartblock-pg/data/postgresql.auto.conf <<EOL
    port=6432
    unix_socket_directories = '${SB_PROJECT_PATH}/smartblock-pg/socket'
    EOL
    
    /usr/lib/postgresql/13/bin/pg_ctl start --pgdata=${SB_PROJECT_PATH}/smartblock-pg/data
    
    psql  --host="${SB_PROJECT_PATH}/smartblock-pg/socket"  --port=6432 postgres
      create database smartblock;
      \q
    
    psql --host="${SB_PROJECT_PATH}/smartblock-pg/socket" --port=6432 smartblock
      \set schema_sql `echo "${SB_PROJECT_PATH}/smartblock-backend/database/schema-postgresql.sql"`
      \set data_sql `echo "${SB_PROJECT_PATH}/smartblock-backend/database/data-postgresql.sql"`
      begin;
      \i :schema_sql
      \i :data_sql
      end;

    
Ürün Açıklaması En (m)  Boy (m) Yükseklik (m) Hacim (m3)  Yoğunluk (ton/m3) Tonaj Birim Fiyat ($/ton) Toplam Fiyat ($)  Sevk tarihi Sevk şekli
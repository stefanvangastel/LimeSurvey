#!/bin/bash

echo "**********************************"
echo ""
echo "LimeSurvey development environment based on Ubuntu 14.04"
echo ""
echo "**********************************"

# From Creating a Vagrant Box

### From update apt
sudo apt-get update

### From Installing PHP5

sudo apt-get install -y git-core curl php5-cli php5-curl php5-mcrypt php5-gd php5 

### From Installing MySQL

debconf-set-selections <<< 'mysql-server \
 mysql-server/root_password password lsdev'
debconf-set-selections <<< 'mysql-server \
 mysql-server/root_password_again password lsdev'
apt-get install -y php5-mysql mysql-server

cat << EOF | tee -a /etc/mysql/conf.d/default_engine.cnf
[mysqld]
default-storage-engine = MyISAM
EOF

service mysql restart

### From Installing Apache

sudo apt-get install -f -y apache2 libapache2-mod-php5
sudo a2enmod rewrite

sudo service apache2 restart

### Symlink shared mount to /var/www for apache
sudo rm -r /var/www/html
sudo ln -sf /vagrant /var/www/html

### End

echo "**********************************"
echo ""
echo "You've been provisioned, visit http://192.168.33.98/ for the LimeSurvey installation."
echo ""
echo "The current directory is symlinked to the Apache docroot of the VM"
echo ""
echo "MySQL credentials are: root|lsdev"
echo ""
echo "**********************************"
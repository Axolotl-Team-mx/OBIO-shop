from os import removedirs
from posixpath import dirname
from django.db import models
from django.contrib.auth.models import User
from cloudinary.models import CloudinaryField

# Create your models here.

# /* |=| Tabla que corresponde a cada una de las categorias. |=| */
# /* |=| Ej. {Cafés de Origen, Miel de Abeja, De Cacao, etc} |=| */
class Categorie(models.Model):
    catId =    models.AutoField(primary_key=True, editable=False)
    catName =  models.CharField(max_length=32)
    catDesc =  models.CharField(max_length=256, null=True, blank=True)


# /* |=| Tabla que corresponde al tipo de presentacion de    |=| */
# /* |=| cada uno de los productos, ej. Coca Cola de 600ml   |=| */
# /* |=| donde la presentación corresponderia a los "600ml". |=| */
class Presentation(models.Model):
    presId =        models.AutoField( primary_key=True, editable=False)
    presName =      models.CharField( max_length=32)
    presContNet =   models.DecimalField( max_digits=8, decimal_places=2, blank=True, null=True)
    presUnit =      models.CharField( max_length=4) # Ej. Kg, mg, etc.

# /* |=| Tabla que corresponde a cada uno de los paises.     |=| */
# /* |=| Ej. {México, Estados Unidos, España, Cuba, etc.}    |=| */
class Pais(models.Model):
    countryId =     models.AutoField( primary_key=True, editable=False)
    countryName =   models.CharField( max_length=32)
        
# /* |=| Tabla que corresponde a cada una de las ciudades.   |=| */
# /* |=| Ej. {Tijuana, Mexicali, Tecate, CDMX, etc.}         |=| */
class Ciudad(models.Model):
    cityId =     models.AutoField( primary_key=True, editable=False)
    cityName =   models.CharField( max_length=16)
    countryId =  models.ForeignKey(Pais, on_delete=models.SET_NULL, null=True) # ¿ Nulo ?
	
# /* |=| Tabla que corresponde a cada una de las ciudades.   |=| */
# /* |=| Ej. {Tijuana, Mexicali, Tecate, CDMX, etc.}         |=| */
class Domicile(models.Model):
    domId =         models.AutoField( primary_key=True, editable=False)
    domDomicilio =  models.CharField( max_length=128)
    domPostal =     models.CharField( max_length=8)
    cityId =        models.ForeignKey(Ciudad, on_delete=models.SET_NULL, null=True) # ¿ Nulo ?
	
# /* |=| Tabla que corresponde a cada una de las sucursales. |=| */
# /* |=| Ej. {Pendiente en el pdf de referencia.}            |=| */
class Branch(models.Model):
    branchId =    models.AutoField( primary_key=True, editable=False)
    branchName =  models.CharField( max_length=128)
    domId =    models.ForeignKey(Domicile, on_delete=models.SET_NULL, null=True) # ¿ Nulo ?
# /* |=| Tabla que corresponde a las marcas/productores.     |=| */
class Brand(models.Model):
    brandId =        models.AutoField( primary_key=True, editable=False)
    brandName =      models.CharField( max_length=128)
    brandDesc =      models.CharField( max_length=1024)
    brandPic =       CloudinaryField('image')
    # brandRegDate =   models.DateTimeField(auto_now_add=True)

# /* |=| Tabla que corresponde a cada uno de los productos.                         |=| */
# /* |=| Ej. {1, Miel de abeja, 19.99, 'Miel de abeja', , '01/05/1994', 1, 1, 1, 1}	|=| */
class Products(models.Model):
    prodId =        models.AutoField( primary_key=True, editable=False)
    prodName =      models.CharField( max_length=128)
    prodPrice =     models.DecimalField( max_digits=8, decimal_places=2, blank=True, null=True)
    prodDesc =      models.CharField( max_length=1024)
    prodPic =       CloudinaryField('image' )
    #prodRegDate =   models.DateTimeField(auto_now_add=True)
    # presId =        models.ForeignKey(Presentation, on_delete=models.SET_NULL, null=True) # ¿ Nulo ?
    sucId =         models.ForeignKey(Branch, on_delete=models.SET_NULL, null=True) # ¿ Nulo ?v
    marcId =        models.ForeignKey(Brand, on_delete=models.SET_NULL, null=True) # ¿ Nulo ?
    catId =         models.ForeignKey(Categorie, on_delete=models.SET_NULL, null=True) # ¿ Nulo ?

# |==============================================================================================| #
# |==| Omití las clases que tiene por defecto 'models', es decir, users, groups y permissions |==| #
# |==============================================================================================| #

# /* |=| Tabla que corresponde a la relacion con la	       |=| */
# /* |=| direccion										   |=| */
class Address(models.Model):
    addname =      models.CharField( max_length=128)
    usrId =        models.ForeignKey(User, on_delete=models.SET_NULL, null=True) # ¿ Nulo ?
    domId =        models.ForeignKey(Domicile, on_delete=models.SET_NULL, null=True) # ¿ Nulo ?

# /* |=| Tabla referente a el carrito de compras del usuario |=| */
class Orders(models.Model):
    orderId =    models.AutoField( primary_key=True, editable=False)
    orderName =  models.CharField( max_length=128)
    orderDate =  models.DateTimeField(auto_now_add=True)
    usrId =     models.ForeignKey(User, on_delete=models.SET_NULL, null=True) # ¿ Nulo ?

# /* |=| Cada uno de los productos asociados a el carrito de |=| */
# /* |=| compras.											 |=| */
class OrderItems(models.Model):
    mprodId =       models.AutoField( primary_key=True, editable=False)
    mprodCantidad = models.IntegerField()
    mcanId =        models.ForeignKey(Orders, on_delete=models.SET_NULL, null=True) # ¿ Nulo ?
    prodId =        models.ForeignKey(Products, on_delete=models.SET_NULL, null=True) # ¿ Nulo ?
        
# /* |=| Tabla para el sistema de rating de los productos.   |=| */
class Reviews(models.Model):
    revId =         models.AutoField( primary_key=True, editable=False)
    revName =       models.CharField( max_length=128)
    revRating =     models.IntegerField()
    revComment =    models.CharField( max_length=1024)
    revDate =       models.DateTimeField(auto_now_add=True)
    prodId =        models.ForeignKey(Products, on_delete=models.SET_NULL, null=True) # ¿ Nulo ?
    usrId =         models.ForeignKey(User, on_delete=models.SET_NULL, null=True) # ¿ Nulo ?
from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response

from base.models import Products
from base.serializers.product_serializers import ProductSerializer
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

from django.contrib.auth.hashers import make_password
from rest_framework import status
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from datetime import date

# Products


@api_view(['GET'])
def getProducts(request):
    try:
        product = Products.objects.all()
        serializer = ProductSerializer(product, many=True)
        return Response(serializer.data)
    except Exception as e:
        print('Error details: ' + ' ' + str(e))
        message = {'detail': 'Something bad happen'}
        return Response(message, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def getProduct(request, pk):
    try:
        product = Products.objects.get(prodId=pk)
        serializer = ProductSerializer(product, many=False)
        return Response(serializer.data)
    except Exception as e:
        print('Error details: ' + ' ' + str(e))
        message = {'detail': 'Something bad happen'}
        return Response(message, status=status.HTTP_400_BAD_REQUEST)


@api_view(['PUT'])
@permission_classes([IsAdminUser])
def updateProduct(request, pk):
    try:
        data = request.data
        product = Products.objects.get(prodId=pk)
        product.prodName = data['name']
        product.prodDesc = data['description']
        product.brandPic = request.FILES.get("img")
        product.save()
        message = {'detail': 'Update product'}
        return Response(message)

    except Exception as e:
        print('Error details: ' + ' ' + str(e))
        message = {'detail': 'Something bad happen'}
        return Response(message, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
def createProduct(request):
    try:
        data = request.data
        product = Products.objects.create(
            prodName=data['name'],
            prodPrice=data['price'],
            prodDesc=data['desc'],
            # sucId=data['suc'],
            # marcId=data['marc'],
            # catId=data['cat'],
        )
        print(data)
        product.prodPic = request.FILES.get('img')
        product.save()
        serializer = ProductSerializer(product, many=False)
        return Response(serializer.data)
    except Exception as e:
        print(e)
        message = {'detail': 'Something bad happen'}
        return Response(message)


@api_view(['DELETE'])
@permission_classes([IsAdminUser])
def deleteProduct(request, pk):
    product = Products.objects.get(prodId=pk)
    product.delete()

    return Response('Delete product')

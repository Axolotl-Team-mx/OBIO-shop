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

# Products
@api_view(['GET'])
def getProducts(request, cat, query, page, order):
    try:
        if query == 'all':
            if cat == "all":
                if order == "Max":
                    products = Products.objects.order_by("-prodPrice")
                elif order == "Min":
                    products = Products.objects.order_by("prodPrice")
                else:
                    products = Products.objects.all()
                paginator = Paginator(products, 8)
                products = paginator.page(page)
                serializer = ProductSerializer(products, many=True)
                return Response({"products": serializer.data, 'pages': paginator.num_pages})
            else:
                if order == "Max":
                    products = Products.objects.filter(
                        catId=cat).order_by("-prodPrice")
                elif order == "Min":
                    products = Products.objects.filter(
                        catId=cat).order_by("prodPrice")
                else:
                    products = Products.objects.filter(catId=cat)
                paginator = Paginator(products, 8)
                products = paginator.page(page)
                serializer = ProductSerializer(products, many=True)
                return Response({"products": serializer.data, 'pages': paginator.num_pages})
        else:
            products = Products.objects.filter(name__icontains=query)
            paginator = Paginator(products, 8)
            products = paginator.page(page)
            serializer = ProductSerializer(products, many=True)
            return Response({"products": serializer.data, 'pages': paginator.num_pages})

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
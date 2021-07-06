from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response

from base.models import Products, Reviews, User
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


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def createProductReview(request, pk):
    product = Products.objects.get(prodId=pk)
    data = request.data
    user = User.objects.get(id=data['user'])
    # 1 - Review already exists
    # alreadyExists = product.review_set.filter(user=user).exists()

    # if alreadyExists:
    #     content = {'detail': 'Product already reviewed'}
    #     return Response(content, status=status.HTTP_400_BAD_REQUEST)
    # 2 - No rating or 0
    if data['rating'] == 0:
        content = {'detail': 'Product select a rating'}
        return Response(content, status=status.HTTP_400_BAD_REQUEST)
    # 3 - Create Review
    else:
        review = Reviews.objects.create(
            usrId=user,
            prodId=product,
            revName=data['name'],
            revRating=data['rating'],
            revComment=data['comment']
        )
        reviews = Reviews.objects.filter(prodId=pk)
        product.numReviews = len(reviews)

        total = 0

        for i in reviews:
            total += i.revRating

        product.rating = total / len(reviews)
        product.save()

        return Response('Comentarios agregados')

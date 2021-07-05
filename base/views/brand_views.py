from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response

from base.models import Brand
from base.serializers.brand_serializers import BrandSerializer

from rest_framework import status

@api_view(['GET']) 
def getBrands(request):
    try:
        brands= Brand.objects.all()
        serializer =  BrandSerializer(brands, many=True)
        return Response(serializer.data)
    
    except Exception as e:
        print('Error details: ' + ' ' + str(e))
        message = {'detail': 'Something bad happen'}
        return Response(message, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def getBrand(request, pk):
    brand = Brand.objects.get(brandId=pk)
    serializer = BrandSerializer(brand, many=True)
    return Response(serializer.data)

@api_view(['PUT'])
@permission_classes([IsAdminUser]) 
def updateBrand(request, pk):
    try:
        data=request.data
        brand=Brand.objects.get(brandId=pk)
        brand.brandName= data['name']
        brand.brandDesc=data['description']
        brand.brandPic=request.FILES.get("img")
        brand.save()
        message = {'detail': 'Update brand'}
        return Response(message)
    
    except Exception as e:
        print('Error details: ' + ' ' + str(e))
        message = {'detail': 'Something bad happen'}
        return Response(message, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
@permission_classes([IsAdminUser])
def createBrand(request):
    try:
        data = request.data
        brand = Brand.objects.create(
            
            brandName = data['name'],
            brandDesc = data['description'],
            
        )
        if data['img']:
            brand.brandPic = request.FILES.get('img')
        brand.save()
        serializer = BrandSerializer(brand, many=True)
        return Response(serializer.data)
    except Exception as e:
        print(e)
        message = {'detail': 'Something bad happen'}
        return Response(message)

@api_view(['DELETE'])
@permission_classes([IsAdminUser])
def deleteBrand(request, pk):
    brand= Brand.objects.get(brandId=pk)
    brand.delete()
    
    return Response('Delete brand')


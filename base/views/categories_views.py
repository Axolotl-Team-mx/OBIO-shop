from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response

from base.models import Categorie
from base.serializers.Categorie_serializers import CategorieSerializer
from rest_framework import status 

@api_view(['GET'])
def getCategories(request):
    try:
        categories = Categorie.objects.all()
        serializer = CategorieSerializer(categories, many= True)
        return Response(serializer.data)
    
    except Exception as e:
        print('Error details: ' + ' ' + str(e))
        message = {'detail': 'Something bad happen'}
        return Response(message, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def getCategorie(request, pk):
    categorie = Categorie.objects.get(catId=pk)
    serializer = CategorieSerializer(categorie, many=False)
    return Response(serializer.data)

@api_view(['PUT'])
@permission_classes([IsAdminUser])
def updateCategorie(request, pk):
    try:
        data=request.data
        categorie =Categorie.objects.get(catId=pk)
        categorie.catName= data['name']
        categorie.catDesc=data['description']
        categorie.save()
        message = {'detail': 'Update categorie'}
        return Response(message)
    
    except Exception as e:
        print('Error details: ' + ' ' + str(e))
        message = {'detail': 'Something bad happen'}
        return Response(message, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def createCategorie(request):
    try:
        data = request.data
        categorie= Categorie.objects.create(
            catName= data['name']
            catDesc= data['desc']
        )
    categorie.save()
    serializer=CategorieSerializer(categorie, many=False)
    return Response(serializer.data)
    
    except Exception as e:
    print(e)
    message = {'detail': 'Something bad happen'}
    return Response(message)

@api_view(['DELETE'])
@permission_classes([IsAdminUser])
def deleteCategorie(request, pk):
    categorie= Categorie.objects.get(brandId=pk)
    categorie.delete()
    
    return Response('Delete categorie')
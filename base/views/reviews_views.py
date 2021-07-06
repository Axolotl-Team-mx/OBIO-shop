from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response

from base.models import Reviews
from base.serializers.brand_serializers import ReviewsSerializer
from rest_framework import status

@api_view(['GET']) 
def getReviews(request):
    try:
        reviews= Reviews.objects.all()
        serializer =  ReviewsSerializer(reviews, many=True)
        return Response(serializer.data)
    
    except Exception as e:
        print('Error details: ' + ' ' + str(e))
        message = {'detail': 'Something bad happen'}
        return Response(message, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def getReview(request, pk):
    review = Reviews.objects.get(revId=pk)
    serializer = ReviewsSerializer(review, many=False)
    return Response(serializer.data)

@api_view(['PUT'])
@permission_classes([IsAdminUser]) 
def updateReview(request, pk):
    try:
        data=request.data
        review=Reviews.objects.get(revId=pk)
        review.revName = data['name']
        review.revRating = data['rating']
        review.revComment = data['comment']
        review.revDate = data['date']
        review.prodId = data['prod']
        review.usrId = data['usr']
        review.save()
        message = {'detail': 'Update review'}
        return Response(message)
    
    except Exception as e:
        print('Error details: ' + ' ' + str(e))
        message = {'detail': 'Something bad happen'}
        return Response(message, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def createReview(request):
    try:
        data = request.data
        review = Reviews.objects.create(
            revName = data['name'],
            revRating = data['rating'],
            revComment = data['comment'],
            revDate = data['date'],
            prodId = data['prod'],
            usrId = data['usr'],
        )
        review.save()
        serializer = ReviewsSerializer(review, many=False)
        return Response(serializer.data)
    except Exception as e:
        print(e)
        message = {'detail': 'Something bad happen'}
        return Response(message)

@api_view(['DELETE'])
@permission_classes([IsAdminUser])
def deleteReview(request, pk):
    review= Reviews.objects.get(revId=pk)
    review.delete()
    return Response('Delete review')

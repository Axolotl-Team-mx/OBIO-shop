from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response

from base.models import Brand, OrderItems
from base.serializers.brand_serializers import OrderItemsSerializer
from rest_framework import status

@api_view(['GET']) 
def getOrderItems(request):
    try:
        orderitems= OrderItems.objects.all()
        serializer = OrderItemsSerializer(orderitems, many=True)
        return Response(serializer.data)
    
    except Exception as e:
        print('Error details: ' + ' ' + str(e))
        message = {'detail': 'Something bad happen'}
        return Response(message, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def getOrderItem(request, pk):
    orderitem = OrderItems.objects.get(brandId=pk)
    serializer = OrderItemsSerializer(orderitem, many=False)
    return Response(serializer.data)

@api_view(['PUT'])
@permission_classes([IsAdminUser]) 
def updateOrderItem(request, pk):
    try:
        data=request.data
        orderitem=OrderItems.objects.get(mprodId=pk)
        orderitem.mprodCantidad= data['cantidad']
        orderitem.mcanId=data['mcan']
        orderitem.prodId= data['prod']
        orderitem.save()
        message = {'detail': 'Update orderitem'}
        return Response(message)
    
    except Exception as e:
        print('Error details: ' + ' ' + str(e))
        message = {'detail': 'Something bad happen'}
        return Response(message, status=status.HTTP_400_BAD_REQUEST)
    
 @api_view(['POST'])
def createOrderItem(request):
    try:
        data = request.data
        orderitem = OrderItems.objects.create(
            mprodCantidad = data['name'],
            mcanId = data['mcan'],
            prodId= data['prod'],
        )
        orderitem.save()
        serializer = OrderItemsSerializer(orderitem, many=False)
        return Response(serializer.data)
    except Exception as e:
        print(e)
        message = {'detail': 'Something bad happen'}
        return Response(message)

@api_view(['DELETE'])
@permission_classes([IsAdminUser])
def deleteOrderItem(request, pk):
    orderitem= OrderItems.objects.get(mprodId=pk)
    orderitem.delete()
    return Response('Delete order item')   